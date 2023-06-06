const Checkbox = ({ checkbox }) => {
  return (
    <>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html:
            '<label><p>Checkbox:</p><input type="checkbox" name="checkbox"/></label>'.repeat(
              checkbox
            ),
        }}
      ></div>
    </>
  );
};

export default Checkbox;
