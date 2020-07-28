import React, { useState, useReducer, useImperativeHandle } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './styles/AnimalForm.css'

const CreateMatch = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"));

  const [match, setMatch] = useState({ userId: "", matchUserId: "", mutualInterest: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...match };
    stateToChange[evt.target.id] = evt.target.value;
    setMatch(stateToChange);
  };

  const newMatch = {
    userId: sessionUser.id,
    matchUserId: match.matchUserId,
    mutualInterest: match.mutualInterest
  };
  
  const constructNewMatch = evt => {
    evt.preventDefault();
    setIsLoading(true);
    UserManager.postAnimal(animal)
      .then(() => props.history.push("/animals"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              onChange={handleFieldChange}
              id="image"
              placeholder="dogDefault.png"
            />
            <label htmlFor="picture">Picture</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm