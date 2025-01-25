import { Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";

interface ProjectModalImagesProps {
    open: boolean;
    onClose: () => void;
    image: string;
}

export default function ProjectModalImages({open, onClose, image }: ProjectModalImagesProps) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xl"
      >
        <DialogContent sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={image} alt={image}/>
        </DialogContent>
      </Dialog>
    );
}