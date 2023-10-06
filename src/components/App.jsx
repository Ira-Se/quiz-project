import { Component } from "react";
import { QuizList } from "./QuizList/QuizList";
import initialQuizItems from '../components/data.json'
import { SearchBar } from "./SearchBar/SearchBar";
import { QuizForm } from "./QuizForm/QuizForm";

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    // topicFilter: '',
    // levelFilter: 'all'
    filters: {
      topic: "",
      level: "all"
    }
  }

  deleteQuizItem = quizId => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId)
    }))
  }
  
 changeFilter = (key, value) => {
      this.setState(prevState => ({
        filters: {
          ...prevState.filters,
          [key]: value
        }
      }))
    }


    // changeTopicFilter = newTopic => {
    //   this.setState(prevState => ({
    //     filters: {
    //       ...prevState.filters,
    //       topic: newTopic
    //    }
    //   }))}

    // changeLevelFilter = newLevel => {
    //   this.setState(prevState => ({
    //     filters: {
    //       ...prevState.filters,
    //       level: newLevel
    //    }
    //   }))
    // }

    getVisibleItems = (quizId) => {
      const { quizItems, filters } = this.state;
      return quizItems.filter(quiz => {
        const hasTopic = quiz.topic.toLowerCase().includes(filters.topic.toLocaleLowerCase())
        if (filters.level === 'all') {
          return hasTopic
        }
        return hasTopic && quiz.level === filters.level
      })
    }

    render() {
      const { filters } = this.state;
      const visibleItems = this.getVisibleItems()

      return <div>
        <QuizForm />
        <SearchBar
          filters={filters}
          onChangeFilter={this.changeFilter} />
        <QuizList items={visibleItems} onDelete={this.deleteQuizItem} /></div>
    }

  }
