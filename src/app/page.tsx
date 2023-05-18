"use client"
import { data } from 'autoprefixer';
import Image from 'next/image'
import Link from "next/link"
import { use, useEffect, useState } from 'react'
import Carousel from './components/Carousel';

type Repository = {
  id: number;
  name : string;
  owner : {
    avatar_url : string;
  }
}
async function getData(username: string): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data: Repository[] = await res.json();
  return data;
}

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [avatar, setAvatar]= useState<string>('');
    useEffect(()=>{
      const fetchdata = async () => {
        const dataAc = await getData('VicthorVF21');
        setAvatar(dataAc[0]?.owner?.avatar_url ?? '');
       setRepos(dataAc);
      };
      fetchdata();
    
    }, []);

    return (
      <div>
      <div className='Div_PhoProfile'>
      <div><Image 
      src={avatar} 
      width={50} 
      height={50} 
      alt="Picture of the author" />
      </div>
      <div>
      {repos.length > 0 && (
            <Carousel items={repos.map(repo => repo.id)} active={0} />
          )}
    {repos.map((repo: Repository) => (
      <div key={repo.id}>     
        <h2>
        <a href={`https://github.com/VicthorVF21/${repo.name}`} target="_blank" rel="noopener noreferrer">
          {repo.name}
          </a>
          </h2> 
      </div>
    ))}
  </div>
  </div>
     <div className='Div_Font'>
      <img id ='PicFont' src='/VMVFsinfondo.png' alt='Fondo'></img>
       </div>
    
  </div>
  
    );
}

 

  
