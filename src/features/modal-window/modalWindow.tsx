import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

interface ModalWindowProps {
  confirmHandler: () => void;
  disagreeHandler: () => void;
  title: string;
  text: string;
  disagreeButtonText?: string;
  agreeButtonText?: string;
  open: boolean;
}

const ModalWindow = (props: ModalWindowProps) => {
  const { text, title, open, confirmHandler, disagreeHandler } = props;

  return (
    <Dialog
      open={open}
      onClose={props.disagreeHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={disagreeHandler} color="secondary">
          {props.disagreeButtonText}
        </Button>
        <Button onClick={confirmHandler} color="secondary" autoFocus>
          {props.agreeButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalWindow.defaultProps = {
  disagreeButtonText: "DISAGREE",
  agreeButtonText: "AGREE",
};

export default ModalWindow;
