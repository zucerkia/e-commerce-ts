import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  size: string;
  className: string;
  name: IconProp;
};

const Icon = ({ name, size, className, ...props }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={name}
      style={{ fontSize: size }}
      className={className}
      {...props}
    />
  );
};

export default Icon;
