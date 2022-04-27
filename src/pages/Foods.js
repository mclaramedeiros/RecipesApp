import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/AppContext';
import Header from '../layout/Header';
import ProfileIcon from '../components/ProfileIcon';
import SearchIcon from '../components/SearchIcon';
import Main from '../layout/Main';

function Foods({ history }) {
  const { meals } = useContext(Context);

  const verifyMeals = () => {
    if (meals === null) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } if (meals.length === 1) {
      return history.push(`/foods/${meals[0].idMeal}`);
    }
  };
  return (
    <>
      <Header title="Foods">
        <ProfileIcon />
        <SearchIcon />
      </Header>
      <Main>
        { verifyMeals() }
        { meals && meals.map((item, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ item.strMealThumb }
              alt="imagem da receita"
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              {item.strMeal}
            </p>
          </div>
        ))}
      </Main>
    </>
  );
}

Foods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Foods;
