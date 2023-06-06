const Input = ({ input }) => {
  return (
    <>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html:
            '<label><p>Input:</p><input type="text" name="input"/></label>'.repeat(
              input
            ),
        }}
      ></div>
    </>
  );
};

export default Input;
