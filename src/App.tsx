import { useState } from 'react';
import songs from './data/songs.json';
import { Reorder } from 'framer-motion';

function App() {

  const [items, setItems] = useState(songs)

  return (

    <div className="flex items-center justify-center min-h-screen text-slate-800 bg-zinc-700">
      <div className="w-full max-w-lg px-4 py-10 my-10 bg-white rounded-lg shadow-2xl m-2 sm:m-0">
        <div className="h-[30rem] -mx-4 -mt-10 bg-[url('/this-is-lana-del-rey.jpg')] bg-cover bg-center flex items-end mb-8">
          <h1 className="w-full p-6 text-3xl font-bold text-left text-white bg-black bg-opacity-50">
            This Is Lana Del Rey
          </h1>
        </div>
        <div>
        <Reorder.Group values={items} onReorder={setItems}>
          <div>
            {items.map((song) => (
              <Reorder.Item key={song.id} value={song}>
              <div
                key={song.id}
                className="flex items-center w-full gap-6 p-4 mx-auto mb-4 card "
              >
                <span className="text-slate-400 border-slate-200 cursor-grab">
                  <img src="/grab-icon.svg" alt="grab icon" className="w-8 h-8" />
                </span>
                <img src={song.image} alt="" className="w-14" />
                <div className="w-full card-header">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold ">{song.title}</h3>
                    <p className="text-sm text-slate-600">{song.duration}</p>
                  </div>
                  <p className="text-sm text-slate-400">{song.artist}</p>
                </div>
              </div>
              </Reorder.Item>
            ))}
          </div>
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}

export default App;