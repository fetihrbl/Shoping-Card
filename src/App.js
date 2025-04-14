import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'T-shirt',
      price: 499,
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png',
    },
    {
      id: 2,
      name: 'Bag',
      price: 699,
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg',
    },
    {
      id: 3,
      name: 'Hoodie',
      price: 799,
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg',
    },
  ]);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');

  const addCourseToCartFunction = (course) => {
    setCartCourses((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === course.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product: course, quantity: 1 }];
      }
    });
  };

  const deleteCourseFromCartFunction = (course) => {
    setCartCourses((prevCart) => {
      return prevCart.filter((item) => item.product.id !== course.id);
    });
  };

  const updateQuantityFunction = (courseId, newQuantity) => {
    setCartCourses((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === courseId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />

      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />

        <UserCartComponent
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          updateQuantityFunction={updateQuantityFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
        />
      </main>

    </div>
  );
}

export default App;