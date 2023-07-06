import './More.css';

function More({showMore}) {
  return (
    <div className="more">
      <button className='more__button' onClick={showMore}>Ещё</button>
    </div>
  );
}

export default More;