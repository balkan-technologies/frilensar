import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import Link from 'next/link';
import styled from 'styled-components';


const ToggleButton = styled(DropdownToggle)`
color: black;
padding: 2px;
position: relative;

&.active:after {
    display: block;
}

&:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

}

`

const OptionList = styled(DropdownMenu)`
    &.dropdown-menu {
    min-width: 0px;
    border-radius: 0px;
    &:hover {
        background-color: white;
    }
    }
`;

const OptionItem = styled(DropdownItem)`
    &.dropdown-item, 
    &.dropdown-item:active,
    &.dropdown-item:focus,
    &.dropdown-item:focus:active,
    &.dropdown-item:hover {
      color: inherit;
      background-color: white;
      border: none;
      outline: none;
    }
`;

const OptionLink = styled.a`
color: black;
padding: 0px;
position: relative;
font-weight: 200;
font-size: 16px;

&:after {
    content: '';
    background-color: #00c6b9;
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -3px;
    width: 97%;
    height: 2px;
}

&.active:after {
    display: block;
}

&:hover {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:after {
        display: block;
    }
}
`;

const DropdownMenuItem = (data) => {
    return (
        <UncontrolledDropdown>
            <ToggleButton nav caret>
                <OptionLink>{data.props.label}</OptionLink>
            </ToggleButton>
            <OptionList >
                {data.props.children.map(data => {
                    return (
                        <OptionItem key={data.id}>
                            <Link href={`/${data.parentPath}/[slug]`} as={`${data.url}`}>
                                <OptionLink>{data.label}</OptionLink>
                            </Link>
                        </OptionItem>
                    )
                })}
            </OptionList>
        </UncontrolledDropdown>

    )
}

export default DropdownMenuItem;
