interface Props {
  title: String;
  text?: String;
}

const SectionHead = ({title, text}: Props) => {
  return (
    <div>
      <h2 className={`text-center ${text ? "mt-6" : "my-6"}`}>{title}</h2>
      {text && <p className="text-center mt-2 mb-8">{text}</p>}
    </div>
  );
};

export default SectionHead;
