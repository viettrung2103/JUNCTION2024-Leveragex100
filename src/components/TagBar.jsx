function TagBar() {
  const tagNameExamples = [
    "Recruiting",
    "Accounting",
    "Finance",
    "HR",
    "Retail",
    "IT",
    "Cloud",
  ];

  return (
    <div className="tag_bar">
      {tagNameExamples.map((tagName) => (
        <div key={tagName} className="tag">
          {tagName}
        </div>
      ))}
    </div>
  );
}

export default TagBar;
