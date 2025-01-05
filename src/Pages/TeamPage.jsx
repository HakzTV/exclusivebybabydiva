
import Navbar from '../components/Navbar';
import founder from '../assets/images/team-mil.png';
import teamlead from '../assets/images/mil-team.jpg';
import header from '../assets/images/group.jpg';
import uju from '../assets/images/uhu.jpg';
import pid from '../assets/images/pid.jpg';
import cel from '../assets/images/cel.jpg';
import sylvia from '../assets/images/sylvia.jpeg';
import founder4 from '../assets/images/bod.jpg';
import pisagid from '../assets/images/an.jpg';
import monko from '../assets/images/monko.jpg';
import ebube from '../assets/images/ebube.jpg';
import cynthia from '../assets/images/cynthia.png';
import tee from '../assets/images/tee.jpg';
import henry from '../assets/images/henry.jpg';
import noprof from '../assets/images/noprof.png';
import kakra from '../assets/images/kakra.jpg';
import emma from '../assets/images/emma.jpg';
import david from '../assets/images/david.jpg';

import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import BasicContent from '../components/BasicContent';
import WhatsAppChat from '../components/WhatsappChat';

const TeamPage = () => {
  return (
    <div className="page">
      <Navbar />
      <HeroImage 
          imageUrl={header} 
        bigText="Meet our
world-class team" 
        smallText="Our Team" />
      <BasicContent 
         imageUrl={teamlead} 
         optionalBasic="hey"
         secondaryText="Together, we work diligently to ensure that every piece we create reflects our brand’s essence and meets the highest standards of luxury and innovation."
         TertiaryText="From design to production, our team collaborates seamlessly, driven by a commitment to style, quality, and customer satisfaction. We’re not just creating clothing; we’re crafting experiences that resonate with our clients and showcase our passion for fashion."
         smallerText="passionate team"
        bigText="At ExclusiveBabyDivaFl, our team forms the core of our creativity and success. Each member contributes a unique blend of skills, dedication, and a shared vision for redefining fashion.  " 
        smallText="Impossible without OUR"
      />
  <section className="team-section">
  <div className="container">

{/* Leadership */}

    <div className="margin-bottom margin-medium"><div className="heading-line-combo_wrapper">
    <h2 className="text-no-wrap normal-wrap-mobile-portrait heading-style-h3">EBFL Leadership</h2>
    <div className="info-line-p_line"></div>
    </div></div>
  
  <div className="card-container">

  <div className="card">

<div className="card-img">
  <img src={founder} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Mildred Alexandra Menkiti</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Founder & Ambassador</span>
  </div>
</div>
</div>
  </div>

{/* Production */}
  <div className="margin-bottom margin-medium"><div className="heading-line-combo_wrapper">
    <h2 className="text-no-wrap normal-wrap-mobile-portrait heading-style-h3">EBFL Production</h2>
    <div className="info-line-p_line"></div>
    </div></div>
  
  <div className="card-container">
  {/* <div className="card">

    <div className="card-img">
      <img src={uju} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Anthony Menkiti </span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Production Technical Manager </span>
      </div>
    </div>
  </div> */}
  <div className="card">

    <div className="card-img">
      <img src={emma} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Emmanuel Chime</span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Top Designer</span>
      </div>
    </div>
  </div>
  <div className="card">

<div className="card-img">
  <img src={david} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> David Sheriff</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Trouser Designer</span>
  </div>
</div>
</div>
  <div className="card">

<div className="card-img">
  <img src={noprof} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Martin</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Tuxedo Designer</span>
  </div>
</div>
</div>


<div className="card">

<div className="card-img">
  <img src={noprof} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Bro. Sammy </span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span> Ladies' Couture Specialist </span>
  </div>
</div>
</div>
  </div>

  {/* Finance */}
  <div className="margin-bottom margin-medium"><div className="heading-line-combo_wrapper">
    <h2 className="text-no-wrap normal-wrap-mobile-portrait heading-style-h3">EBFL Finance</h2>
    <div className="info-line-p_line"></div>
    </div></div>
  
  <div className="card-container">
  <div className="card">

    <div className="card-img">
      <img src={ebube} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Sheila EbubeDike </span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Finance - Head</span>
      </div>
    </div>
  </div>
  <div className="card">

<div className="card-img">
  <img src={pisagid} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Isaac Gideon Poku</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Finace Cordinator</span>
  </div>
</div>
</div>

  </div>

  {/* Creative team and media */}
  <div className="margin-bottom margin-medium"><div className="heading-line-combo_wrapper">
    <h2 className="text-no-wrap normal-wrap-mobile-portrait heading-style-h3">EBFL Creatives</h2>
    <div className="info-line-p_line"></div>
    </div></div>
  
  <div className="card-container">
  <div className="card">

<div className="card-img">
  <img src={founder} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Mildred Alexandra Menkiti</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Executive Creative Director</span>
  </div>
</div>
</div>
  <div className="card">

    <div className="card-img">
      <img src={sylvia} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Sylvia Menkiti </span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Show Director </span>
      </div>
    </div>
  </div>
  <div className="card">

<div className="card-img">
  <img src={tee} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Varfley Telvin Caesar</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Graphic Designer</span>
  </div>
</div>
</div>
<div className="card">

<div className="card-img">
  <img src={uju} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Anthony Menkiti </span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Production Technical Manager </span>
  </div>
</div>
</div>
  </div>
  
  {/* Marketing*/}
  <div className="margin-bottom margin-medium"><div className="heading-line-combo_wrapper">
    <h2 className="text-no-wrap normal-wrap-mobile-portrait heading-style-h3">EBFL Marketing</h2>
    <div className="info-line-p_line"></div>
    </div></div>
  
  <div className="card-container">
  <div className="card">

<div className="card-img">
  <img src={monko} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Charles Monko</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Sales & Marketing Director</span>
  </div>
</div>
</div>
  <div className="card">

    <div className="card-img">
      <img src={henry} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Henry Lamptey </span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Sales Manager </span>
      </div>
    </div>
  </div>
  <div className="card">

<div className="card-img">
  <img src={kakra} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Kakra Duncan</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Marketing Manager</span>
  </div>
</div>
</div>
  <div className="card">

    <div className="card-img">
      <img src={pid} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Annabelle Ishak </span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Sales and Marketing Coordinator </span>
      </div>
    </div>
  </div>


  </div>

{/* Publisict*/}
<div className="margin-bottom margin-medium"><div className="heading-line-combo_wrapper">
    <h2 className="text-no-wrap normal-wrap-mobile-portrait heading-style-h3">EBFL Publicists</h2>
    <div className="info-line-p_line"></div>
    </div></div>
  
  <div className="card-container">
  <div className="card">

<div className="card-img">
  <img src={noprof} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Pascal Yevunu</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Publicist</span>
  </div>
</div>
</div>
  <div className="card">

    <div className="card-img">
      <img src={cel} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Celacy Leslie Dumehasie </span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Publicist </span>
      </div>
    </div>
  </div>



  </div>

  {/* Board of Directors */}
  <div className="margin-bottom margin-medium"><div className="heading-line-combo_wrapper">
    <h2 className="text-no-wrap normal-wrap-mobile-portrait heading-style-h3">EBFL Board of Directors</h2>
    <div className="info-line-p_line"></div>
    </div></div>
  
  <div className="card-container">
  <div className="card">

<div className="card-img">
  <img src={founder} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Mildred Alexandra Menkiti</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Founder & 
    Couturière</span>
  </div>
</div>
</div>
  <div className="card">

<div className="card-img">
  <img src={cynthia} alt="Mildred" />
</div>
<div className="card-body">
  <div className="user-name">
   <span> Cynthia Adalikwu</span>
  </div>
  <div className="info-line-p_line"></div>
  <div className="user-title">
    <span>Board Member</span>
  </div>
</div>
</div>
  <div className="card">

    <div className="card-img">
      <img src={founder4} alt="Mildred" />
    </div>
    <div className="card-body">
      <div className="user-name">
       <span> Millicent Menkiti </span>
      </div>
      <div className="info-line-p_line"></div>
      <div className="user-title">
        <span>Board Member</span>
      </div>
    </div>
  </div>


  </div>
  </div>
    </section>


    
      <Footer />

      <WhatsAppChat /> 
  
    </div>
  );
};

export default TeamPage;
