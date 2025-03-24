interface IFooterProps {
  text: string;
}
export const Footer = (props: IFooterProps) => {
  return (
    <footer id="contact" className="container mx-auto px-4 py-8">
      <div className="text-center text-gray-400">
        <p>{props.text}</p>
      </div>
    </footer>
  );
};
