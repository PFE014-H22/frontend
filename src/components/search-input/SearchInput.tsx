import TextInput, { TextInputProps } from '../text-input/TextInput';
import SearchIcon from '@mui/icons-material/Search';

export interface SearchInputProps extends Omit<TextInputProps, 'placeholder'> {}

const SearchInput = (props: SearchInputProps) => {
	return (
		<div className="relative max-w-fit">
			<TextInput placeholder="Search..." {...props} />
			<SearchIcon className="absolute top-[25%] right-[8px]" />
		</div>
	);
};

export default SearchInput;
