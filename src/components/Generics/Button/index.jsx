/* eslint-disable react/prop-types */
import { Button, Icons } from "./style";

export const GenericButton = (props) => {
  const { children, type } = props;
  switch (type) {
    case "filter":
      return (
        <Button.Filter {...props}>
          <Icons.Filter />
          {children}
        </Button.Filter>
      );
    case "import":
      return (
        <Button.Import {...props}>
          <Icons.Impprt /> {children}
        </Button.Import>
      );
    case "save":
    case "primary":
      return <Button.Primay {...props}>{children}</Button.Primay>;
    case "delete":
      return <Button.Delete {...props}>{children}</Button.Delete>;
    case "add":
      return (
        <Button.Add {...props}>
          <Icons.Plus />
          {children}
        </Button.Add>
      );
    default:
      return <Button {...props}>{children}</Button>;
  }
};

export default GenericButton;
