import "./index.css";

interface ScrollBarProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ScrollBar: React.FC<ScrollBarProps> = ({ ...props }) => {
  const { className, children } = props;

  return (
    <div {...props} className={"scrollbar overflow-y-auto overflow-x-auto " + className}>
      {children}
    </div>
  );
};

export default ScrollBar;
