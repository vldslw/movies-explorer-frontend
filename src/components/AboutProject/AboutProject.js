import './AboutProject.css';
import Heading from '../Heading/Heading';

function AboutProject() {
  return (
    <section className="about-project">
      <Heading
        title={'О проекте'}
      />
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__sublitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__sublitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__desc">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>   
      <div className="about-project__timeline">
        <p className="about-project__timeline-item1">1 неделя</p>
        <p className="about-project__timeline-item2">4 недели</p>
        <p className="about-project__timeline-item3">Back-end</p>
        <p className="about-project__timeline-item4">Front-end</p>
      </div>    
    </section>
  );
}

export default AboutProject;