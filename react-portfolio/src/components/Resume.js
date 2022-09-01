export default function Resume() {
  return (
    <div className="resumeBackground">
      <h1 className="resumeTitle">Resume</h1>
      <div className="resumeProf">
        <div className="resumeProfTitle">Proficiencies</div>
        <ul className="resumeList">
          <li>CSS</li>
          <li>HTML</li>
          <li>JS</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="resumeDownload">
        <a
          className="resumeDownloadLink"
          href="../img/Zhong_Resume_22.pdf"
          download="Zhong_Resume_22.pdf"
        >
          Click Here To Download
        </a>
      </div>
    </div>
  );
}
