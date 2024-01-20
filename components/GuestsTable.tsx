'use client';

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { removeGuest, removeMultipleGuests } from '@/app/dashboard/actions';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Guest } from '@prisma/client';
import Link from 'next/link';
import { AddGuestDialog } from './AddGuestDialog';
import { ModifyGuestDialog } from './ModifyGuestDialog';
import StatusBadge from './StatusBadge';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { Toaster } from './ui/toaster';
import { toast } from './ui/use-toast';

export const columns: ColumnDef<Guest>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Выбрать строку"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Выбрать строку"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Имя гостя
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			return <div className="font-medium">{row.getValue('name')}</div>;
		},
	},
	{
		accessorKey: 'status',
		header: 'Статус',
		cell: ({ row }) => <StatusBadge status={row.getValue('status')} />,
	},
	{
		accessorKey: 'phone',
		header: 'Номер телефона',
		cell: ({ row }) => {
			const phone = row.getValue('phone');
			return (
				<Link href={`tel:${phone}`} className="lowercase">
					<>{phone}</>
				</Link>
			);
		},
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const guest = row.original;
			const guestId = guest.id;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Открыть меню</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Действия</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => {
								navigator.clipboard.writeText(
									`${location.origin}/?id=${guestId}`
								);
								toast({
									title: `Ссылка скопирована`,
								});
							}}
						>
							Скопировать ссылку гостя
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<ModifyGuestDialog guest={guest} />
						<DropdownMenuItem
							className="text-red-500 hover:text-red-500"
							onClick={async () => {
								const removedGuest = await removeGuest(guestId);
								toast({
									title: `Гость ${removedGuest.name} удалён`,
								});
							}}
						>
							Удалить гостя
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function GuestsTable({ data }: { data: Guest[] }) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full">
			<Toaster />
			<div className="flex items-center justify-between py-4">
				<div className="flex gap-2">
					{(table.getIsAllPageRowsSelected() ||
						table.getIsSomePageRowsSelected()) && (
						<Button
							onClick={async () => {
								const selectedRows = table.getSelectedRowModel().rows;
								const idsToRemove = selectedRows.map((row) => row.original.id);
								const response = await removeMultipleGuests(idsToRemove);
								toast({
									title: response.message,
								});
							}}
							variant="destructive"
						>
							Удалить выбранные
						</Button>
					)}
					<Input
						placeholder="Найти по имени..."
						value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
						onChange={(event) =>
							table.getColumn('name')?.setFilterValue(event.target.value)
						}
						className="max-w-sm"
					/>
					<Select
						onValueChange={(value) =>
							table.getColumn('status')?.setFilterValue(value)
						}
						value={
							(table.getColumn('status')?.getFilterValue() as string) ?? ''
						}
					>
						<SelectTrigger className="max-w-sm">
							<SelectValue placeholder="Выбрать статус" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Выбрать статус</SelectLabel>
								<SelectItem value="Придёт">Придёт</SelectItem>
								<SelectItem value="Не придёт">Не придёт</SelectItem>
								<SelectItem value="Неизвестно">Неизвестно</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Button
						variant="secondary"
						onClick={() => {
							table.resetColumnFilters();
						}}
					>
						Сбросить фильтры
					</Button>
				</div>
				<div className="flex gap-2">
					<AddGuestDialog />
				</div>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									Пока нет гостей
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} of{' '}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}
