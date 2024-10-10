import React from 'react';
import './SaveC.css'; // Link to your CSS file

const SaveTheChildren = () => {
  return (
    <div className="container">
      {/* Header section with text overlay */}
      <div className="header-container">
        <img 
          src="https://example.com/path-to-your-image/SaveC.png" 
          alt="Children in classroom" 
          className="main-image" 
        />
        <div className="overlay">
          <h2>WHY</h2>
          <h1>SAVE THE CHILDREN?</h1>
        </div>
      </div>

      <h2 className="subtitle">
        Save the Children was the first global movement for children, boldly declaring that children have rights.
      </h2>

      {/* First section: text and image */}
      <div className="content">
        <div className="text-content">
          <h3>Today, we champion the rights of the world’s 2.3 billion children.</h3>
          <p>
            Believe it or not, in 1919, when <strong>Eglantyne Jebb</strong> founded Save the Children, her conviction 
            that children have the right to grow up healthy, educated, and safe was not a mainstream idea.
          </p>
          <p>
            Much has changed since then. The <a href="#">UN Convention on the Rights of the Child</a>, based on our 
            founder's declaration, is now the most universally accepted human rights treaty in history. Through our work 
            worldwide, we’ve changed the lives of over 1 billion children.
          </p>
          <p>
            We work in over 100 countries, doing whatever it takes—every day and in times of crisis—to give children a 
            healthy start in life, the opportunity to learn, and protection from harm.
          </p>
          <ul>
            <li>Health programs reaching millions of children.</li>
            <li>Education initiatives ensuring brighter futures.</li>
            <li>Protection from violence, abuse, and neglect.</li>
          </ul>
          <p>
            Thanks to our supporters, we achieve tremendous results for children. In 2023 alone, Save the Children programs 
            and partners helped 105.9 million children in 115 countries become healthier, safer, and better educated.
          </p>
        </div>
        <img 
          src="https://example.com/path-to-your-image/var.png" 
          alt="Championing Children's Rights" 
          className="additional-image" 
        />
      </div>

      {/* Second section: text and image */}
      <div className="second-section">
        <div className="text-content">
          <h3>We work in the hardest-to-reach places, where it's toughest to be a child.</h3>
          <p>
            The scale of crisis in the world has increased exponentially in recent years. More children live in conflict and war zones now than at any time in the past 20 years, and more children are refugees.
            Natural disasters are not only more frequent but also more severe. Children in crisis are among the most vulnerable.
          </p>
          <p>
            In particular, over 12 million refugee boys and girls face a triple jeopardy. They’ve lost their homes, lost their education, and now face the additional impact of COVID-19 on their futures.
          </p>
          <p>
            As the global leader in protecting children from the physical and emotional wounds of war, Save the Children has been a lifeline for families fleeing violence in Syria, Venezuela, Myanmar, and many other crises around the world.
          </p>
          <p>
            In Yemen, as the largest aid organization, we helped 1.7 million children, supported 88 health facilities, and 23 hospitals last year alone.
          </p>
        </div>
        <img 
          src="https://example.com/path-to-your-image/refugee.png" 
          alt="Refugee child" 
          className="additional-image" 
        />
      </div>
    </div>
  );
}

export default SaveTheChildren;
