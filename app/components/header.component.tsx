import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { IoMdCart } from "react-icons/io";

const Header = () => {
    return (
        <div
            className="glass"
        >
            <Navbar>
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit text-2xl">Nurish</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {/* <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem> */}
                    {/* <NavbarItem>
                        <Link href="#" aria-current="page" className="text-xl font-medium">
                            Fleurs
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link href="#" className="text-xl font-medium">
                        Huile
                    </Link>
                    </NavbarItem> */}
                </NavbarContent>
                <NavbarContent justify="end">
{/*                     
                    <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                    </NavbarItem> */}

                    <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat" endContent={<IoMdCart size={18}/>}>
                        Panier
                    </Button>
                    </NavbarItem>

                </NavbarContent>
            </Navbar>
        </div>
    );
}

export default Header;