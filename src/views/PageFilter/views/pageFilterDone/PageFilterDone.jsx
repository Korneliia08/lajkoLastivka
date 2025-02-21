import style from "./PageFilterDone.module.scss";

const PageFilterDone = ({ filterPageContent, ...props }) => {
  return (
    <>
      <br />
      <div
        className={`${style.thanksText} ql-editor`}
        dangerouslySetInnerHTML={{
          __html: filterPageContent.commentSendPageQuill,
        }}
      ></div>
    </>
  );
};
export default PageFilterDone;
