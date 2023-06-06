const Textarea = ({ textarea }) => {
  return (
    <>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html:
            '<label><p>Textarea:</p><textarea name="textarea"></textarea></label>'.repeat(
              textarea
            ),
        }}
      ></div>
    </>
  );
};

export default Textarea;
