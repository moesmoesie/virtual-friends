export interface ContainerType {
  scrollMargin?: number;
  backgroundColor?: string;
  padding: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerType> = (props) => {
  return (
    <div
      style={{
        scrollMargin: props?.scrollMargin,
        backgroundColor: props?.backgroundColor
          ? props?.backgroundColor
          : "transparent",
      }}
    >
      <div
        style={{
          padding: props.padding ? props.padding : "0px",
        }}
        className={`md:px-16 mx-auto small:max-w-lg medium:max-w-5xl relative large:max-w-7xl px-4 medium:px-10`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Container;
