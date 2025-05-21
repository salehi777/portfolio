import Image from "next/image";
import { StyledDrawer, StyledHeader } from "./styles";
import Link from "next/link";
// import { Backdrop, Drawer, IconButton } from "@mui/material";
// import SvgColor from "@/components/svg-color";
// import { useState } from "react";

export default function Header() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <Image src="/images/logo.png" width={60} height={60} alt="رزومه" />
          <div>رزومه</div>
        </Link>

        {/* <IconButton onClick={() => setOpen(true)}>
          <SvgColor src="/icons/menu.svg" />
        </IconButton> */}
      </StyledHeader>

      {/* <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={open}
        onClick={() => setOpen(false)}
      />
      <StyledDrawer sx={{ width: open ? 300 : 0 }}></StyledDrawer> */}
    </>
  );
}
