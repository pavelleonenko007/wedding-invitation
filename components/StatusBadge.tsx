import { Badge } from './ui/badge';

type StatusBadgeProps = {
	status: 'Придёт' | 'Не придёт' | 'Не известно';
};

export default function StatusBadge({
	status = 'Не известно',
}: StatusBadgeProps) {
	switch (status) {
		case 'Придёт':
			return <Badge className="bg-lime-500 hover:bg-lime-600">{status}</Badge>;
		case 'Не придёт':
			return <Badge className="bg-red-500 hover:bg-red-600">{status}</Badge>;
		default:
			return <Badge className="bg-slate-700 hover:bg-slate-800">{status}</Badge>;
	}
}
