import './Heading.css';

function Heading({ title }) {
  return (
    <div className="heading-sec">
      <h2 id="techs" className="heading-sec__title">{title}</h2>
    </div>
  );
}

export default Heading;