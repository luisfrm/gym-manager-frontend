import H2Heading from "@components/headings/H2Heading";
import { Button } from "@components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@components/ui/table";
import { Edit, Eye, MoveDown, Trash2, UserPlus } from "lucide-react";
import PageHeader from "./PageHeader";
import PageTemplate from "@components/PageTemplate";
import { Key, useEffect, useMemo, useState } from "react";
import { getMembers } from "@/config/api";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@components/ui/pagination";
import { Skeleton } from "@components/ui/skeleton";
import Modal from "@components/Modal";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import { Label } from "@components/ui/label";
import { DialogFooter } from "@components/ui/dialog";
import { Input } from "@components/ui/input";

// type Props = {};

interface Member {
	id: Key | null | undefined;
	name: string;
	email: string;
	plan: string;
	joinDate: string;
	expiredOn: string;
}

const Members = () => {
	const [members, setMembers] = useState<Member[]>([]);
	const [searchTerm] = useState<string>("");
	const [sortBy, setSortBy] = useState<string>("name");
	const [isLoadingMembers, setIsLoadingMembers] = useState(false);

	const filteredAndSortedMembers = useMemo(() => {
		console.log("Recalculating clients list"); // To demonstration
		return members
			.filter(
				(member) =>
					member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					member.email.toLowerCase().includes(searchTerm.toLowerCase())
			)
			.sort((a, b) =>
				String(a[sortBy as keyof Member] ?? "").localeCompare(
					String(b[sortBy as keyof Member] ?? "")
				)
			);
	}, [members, searchTerm, sortBy]);

	useEffect(() => {
		const fetchMembers = async () => {
			setIsLoadingMembers(true);
			try {
				const response = await getMembers();
				const { status, data: membersData } = response;

				if (status == 200 && membersData.length > 0) {
					setMembers(membersData);
					return;
				}
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoadingMembers(false);
			}
		};

		fetchMembers();
	}, []);

	return (
		<PageTemplate>
			<PageHeader>
				<H2Heading>Members</H2Heading>
				<AddMemberModal />
			</PageHeader>

			<Table className="bg-white rounded-lg">
				<TableRow>
					<TableHead
						className={"flex items-center flex-nowrap"}
						onClick={() => setSortBy("name")}
					>
						Name {sortBy === "name" && <MoveDown className="h-4 w-4 inline" />}
					</TableHead>
					<TableHead className={""} onClick={() => setSortBy("email")}>
						Email{" "}
						{sortBy === "email" && <MoveDown className="h-4 w-4 inline" />}
					</TableHead>
					<TableHead className={""} onClick={() => setSortBy("plan")}>
						Plan {sortBy === "plan" && <MoveDown className="h-4 w-4 inline" />}
					</TableHead>
					<TableHead className={""} onClick={() => setSortBy("joinDate")}>
						Join date{" "}
						{sortBy === "joinDate" && <MoveDown className="h-4 w-4 inline" />}
					</TableHead>
					<TableHead>Actions</TableHead>
				</TableRow>
				<TableBody>
					{!isLoadingMembers && (
						<TableMembers members={filteredAndSortedMembers} />
					)}

					{isLoadingMembers && (
						<>
							<TableRow className="hover:bg-gray-100" key="Table loading">
								<TableCell>
									<Skeleton className="h-4 w-32" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-32" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-10" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-10" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-20" />
								</TableCell>
							</TableRow>
							<TableRow className="hover:bg-gray-100" key="Table loading">
								<TableCell>
									<Skeleton className="h-4 w-32" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-32" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-10" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-10" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-20" />
								</TableCell>
							</TableRow>
						</>
					)}
				</TableBody>
			</Table>
			{!isLoadingMembers && <MembersPagination />}
		</PageTemplate>
	);
};

const TableMembers = ({ members }: { members: Array<Member> }) => {
	return members.map((member) => (
		<TableRow className="hover:bg-gray-100" key={member.id}>
			<TableCell>{member.name}</TableCell>
			<TableCell>{member.email}</TableCell>
			<TableCell>{member.plan}</TableCell>
			<TableCell>{member.joinDate}</TableCell>
			<TableCell>
				<div className="flex space-x-2">
					<SeeMember member={member} />
					<EditMemberModal member={member} />
					<DeleteMemberModal member={member} />
				</div>
			</TableCell>
		</TableRow>
	));
};

const MembersPagination = (): JSX.Element => {
	return (
		<Pagination className="mt-6">
			<PaginationContent className="bg-white">
				<PaginationItem>
					<PaginationPrevious className="hover:font-bold" href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink className="hover:font-extrabold" href="#">
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink className="hover:font-extrabold" href="#">
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink className="hover:font-extrabold" href="#">
						3
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext className="hover:font-bold" href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

const SeeMember = ({ member }: { member: Member }) => {
	const trigger = (
		<Button
			variant="outline"
			size="sm"
			aria-label={`See ${member.name}`}
			className="bg-white"
		>
			<Eye className="h-4 w-4" />
		</Button>
	);

	return (
		<Modal
			trigger={trigger}
			title={`Member Details`}
			description={`Detailed information about ${member.name}`}
		>
			<div className="grid gap-4 py-4">
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="name" className="text-right">
						Name
					</Label>
					<div id="name" className="col-span-3">
						{member.name}
					</div>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="email" className="text-right">
						Email
					</Label>
					<div id="email" className="col-span-3">
						{member.email}
					</div>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="plan" className="text-right">
						Plan
					</Label>
					<div id="plan" className="col-span-3">
						{member.plan}
					</div>
				</div>
				<div className="grid grid-cols-4 items-center gap-4">
					<Label htmlFor="joinDate" className="text-right">
						Join Date
					</Label>
					<div id="joinDate" className="col-span-3">
						{member.joinDate}
					</div>
				</div>
			</div>
			<DialogFooter>
				<Button type="button">
					Close
				</Button>
			</DialogFooter>
		</Modal>
	);
};

const AddMemberModal = () => {
	const trigger = (
		<Button className="bg-black text-white hover:opacity-80">
			<UserPlus className="mr-2 h-4 w-4" />
			Add Member
		</Button>
	);

	return (
		<Modal
			trigger={trigger}
			title="Add New Member"
			description="Fill in the details to add a new member to the gym."
			className="bg-white"
		>
			<form className="space-y-4">
				<div>
					<Label htmlFor="name">Name</Label>
					<Input id="name" placeholder="Enter member's name" />
				</div>
				<div>
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="Enter member's email" />
				</div>
				<div>
					<Label htmlFor="plan">Membership Plan</Label>
					<Select>
						<SelectTrigger id="plan">
							<SelectValue placeholder="Select a plan" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="basic">Basic</SelectItem>
							<SelectItem value="premium">Premium</SelectItem>
							<SelectItem value="pro">Pro</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</form>
			<DialogFooter>
				<Button variant="outline" onClick={() => {}}>
					Cancel
				</Button>
				<Button type="submit">Add Member</Button>
			</DialogFooter>
		</Modal>
	);
};

const EditMemberModal = ({ member }: { member: Member }) => {
	const trigger = (
		<Button
			variant="outline"
			size="sm"
			aria-label={`Edit ${member.name}`}
			className="bg-white"
		>
			<Edit className="h-4 w-4" />
		</Button>
	);

	return (
		<Modal
			title="Edit Member"
			description="Update the member's information."
			trigger={trigger}
		>
			<form className="space-y-4">
				<div>
					<Label htmlFor="edit-name">Name</Label>
					<Input id="edit-name" defaultValue={member.name} />
				</div>
				<div>
					<Label htmlFor="edit-email">Email</Label>
					<Input id="edit-email" type="email" defaultValue={member.email} />
				</div>
				<div>
					<Label htmlFor="edit-plan">Membership Plan</Label>
					<Select defaultValue={member.plan}>
						<SelectTrigger id="edit-plan">
							<SelectValue placeholder="Select a plan" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="basic">Basic</SelectItem>
							<SelectItem value="premium">Premium</SelectItem>
							<SelectItem value="pro">Pro</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</form>
			<DialogFooter>
				<Button variant="outline" onClick={() => {}}>
					Cancel
				</Button>
				<Button type="submit">Save Changes</Button>
			</DialogFooter>
		</Modal>
	);
};

export const DeleteMemberModal = ({ member }: { member: Member }) => {
	const trigger = (
		<Button
			variant="outline"
			size="sm"
			aria-label={`Delete ${member.name}`}
			className="bg-white"
		>
			<Trash2 className="h-4 w-4" />
		</Button>
	);

	return (
		<Modal
			title="Delete Member"
			description="Are you sure you want to delete this member? This action cannot be undone."
			trigger={trigger}
		>
			<p className="mb-4">Member to delete: {member.name}</p>
			<DialogFooter>
				<Button variant="outline" onClick={() => {}}>
					Cancel
				</Button>
				<Button variant="destructive">Delete Member</Button>
			</DialogFooter>
		</Modal>
	);
};

export default Members;
