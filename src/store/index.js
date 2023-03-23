
import { legacy_createStore} from 'redux'
const counterReducer = (state = {
    coffee: 0,
    sugar: 0,
    user: '',
    isLoggedIn: false,
   
}, action) => {

    if (action.type === 'incrementCoffee') {
        return {
            coffee: state.coffee + 1,
            sugar: state.sugar,
            isLoggedIn: state.isLoggedIn,           
            user: state.user
        }
    }
    if (action.type === 'decrementCoffee') {
        return {
            coffee: state.coffee - 1,
            sugar: state.sugar,
            isLoggedIn: state.isLoggedIn,          
            user: state.user
        }
    }
    if (action.type === 'increaseCoffee') {
        return {
            coffee: state.coffee + action.number,
            sugar: state.sugar,
            isLoggedIn: state.isLoggedIn,          
            user: state.user
        }
    }
    if (action.type === 'incrementSugar') {
        return {
            sugar: state.sugar + 1,
            coffee: state.coffee,
            isLoggedIn: state.isLoggedIn,          
            user: state.user
        }
    }
    if (action.type === 'decrementSugar') {
        return {
            sugar: state.sugar - 1,
            coffee: state.coffee,
            isLoggedIn: state.isLoggedIn,          
            user: state.user
        }
    }    
    if (action.type === 'increaseSugar') {
        return {
            sugar: state.sugar + action.number,
            coffee: state.coffee,
            isLoggedIn: state.isLoggedIn,          
            user: state.user
        }
    }

    if (action.type === 'logIn') {
        return {
            ...state,
            isLoggedIn: true,           
        }
    }
    if (action.type === 'logOut') {
        return {
            ...state,
            isLoggedIn: false,        
        }
    }
   
    if (action.type === 'save') {
        const { coffee, sugar } = state;
        localStorage.setItem('coffee', coffee);
        localStorage.setItem('sugar', sugar);
        return {
            ...state,
            isLoggedIn: true
        };
    }
    if (action.type === 'clear') {
        localStorage.clear();
        return {
            ...state,
            isLoggedIn: true
        };
    }

    return state
}
const store = legacy_createStore(counterReducer);

export default store;