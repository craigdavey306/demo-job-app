import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AboutPage = () => {
  const [user, setUser] = useState('craig');

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Bacon ipsum dolor amet pastrami kielbasa pork, spare ribs leberkas
        porchetta fatback cow swine chuck jerky boudin. Pastrami corned beef
        turkey sausage fatback, cow rump bacon. Chuck flank biltong corned beef
        salami. Sausage pork picanha tail leberkas kielbasa. Tenderloin
        frankfurter doner chicken, meatloaf cupim ham hock. Alcatra pancetta
        fatback cow venison pork belly.
      </p>
      <p>
        Spare ribs bacon cupim ham kielbasa leberkas meatloaf tail filet mignon
        pancetta jowl. Drumstick prosciutto ground round boudin, cupim picanha
        tongue turducken tenderloin biltong chicken burgdoggen pastrami meatloaf
        chuck. Pork belly short ribs meatball chuck t-bone buffalo fatback
        tri-tip beef strip steak doner venison. Turducken short loin shoulder
        spare ribs beef ribs frankfurter ribeye shank short ribs. Brisket pig
        ball tip boudin short ribs beef fatback bresaola hamburger sausage
        leberkas biltong capicola. Rump kevin corned beef, venison ground round
        shank turducken filet mignon buffalo tenderloin shoulder ham capicola.
      </p>
      <p>
        Short loin ham chicken, tri-tip tenderloin swine kevin brisket filet
        mignon prosciutto chuck pork chop. Swine bresaola ground round picanha,
        jowl strip steak venison. Filet mignon short ribs ball tip pork pork
        loin brisket, t-bone porchetta chislic meatloaf leberkas bacon
        burgdoggen. Cupim chicken sausage picanha beef ribs rump, ground round
        short ribs jowl pork landjaeger turducken flank.
      </p>
      <button onClick={() => setUser('')}>Logout</button>
    </div>
  );
};

export default AboutPage;
