interface Props {
  title: String;
  text?: String;
  titleClass?: String;
  textClass?: String;
}

const SectionHead = ({title, titleClass, text, textClass}: Props) => {
  return (
    <div>
      <h2 className={`text-center ${text ? "mt-6" : "my-6"} ${titleClass}`}>
        {title}
      </h2>
      {text && (
        <p className={`text-center mt-2 mb-8 mx-auto max-w-4xl ${textClass}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default SectionHead;
