import { firstSectionImgSvg } from 'utils/images';
import './firstSection.css';


function FirstSection() {
  return (
    <section className='first-section'>
      <img src={firstSectionImgSvg} alt='' className='first-section--image' />

      <div className='first-section--text'>
        <h4 className='sections-headings'>
          We bring the very best Africa has to offer to your fingertips
        </h4>
        <p className='sections-body'>
          Technology is rapidly changing the world of Sports globally in many
          different ways and football isn&apos;t left out. One major niche that
          has been impacted positively is the field of talent recruitment,
          specifically talent scouting
        </p>
        <br />
        <p className='sections-body sections-body__sub-paragraph'>
          Football talent scouting has experienced a major paradigm shift
          globally, evolving from purely traditional methods of talent
          identification and poaching to, the{' '}
          <a
            rel='noreferrer'
            href='https://indianexpress.com/article/sports/football/how-data-analytics-changed-football-scouting-8696641/'
            target='_blank'>
            use of technology, video, stats and analytics
          </a>{' '}
          to drive decision making in scouting that is now known as technical
          scouting.
        </p>
        <p className='sections-body sections-body__sub-paragraph'>
          In the new world of football recruitment, professional recruiters now
          take
          <a
            rel='noreferrer'
            href='https://www.footballytics.ch/post/data-scouting-first-the-data-then-the-videos-and-then-the-stadium'
            target='_blank'>
            first the data, then the videos and then the stadium approach to
            scouting
          </a>{' '}
        </p>
      </div>
    </section>
  );
}

export default FirstSection;
