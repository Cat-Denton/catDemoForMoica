import React, { useState } from 'react';
import { IonSearchbar, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { useQuery, gql } from "@apollo/client";

// const {useState} = React;

const SW_QUERY = gql `{
    allFilms {
      films {
        title
      }
    }
    
}`
const ApiHandler = (query) => {
  // console.log(query)
  const { data, loading, error } = useQuery(query);
  if(loading) return 'Loading...';
  if(error) return <pre>{error.message}</pre>
  return data.allFilms.films.map((film) => (
    <IonItem key={film.title}>
      <IonLabel>{film.title}</IonLabel>  
    </IonItem>
  ));
}

function List() {
  const [search, setSearch] = useState(null);
  return (
    <React.Fragment>
      <h1>Star Wars Movies</h1>
      <IonSearchbar value={search} onIonChange={e => setSearch(e.detail.value)}></IonSearchbar>
      <IonList>
        {console.log(SW_QUERY)}
        {ApiHandler(SW_QUERY)}
        <IonItem>
          <IonLabel>{search}</IonLabel>
        </IonItem>
      </IonList>
    </React.Fragment>
  )
}

export default List;

// export const List: React.FC = () => (
//   <IonContent>
//     <IonList>
      
//     </IonList>
//   </IonContent>
// );
  
