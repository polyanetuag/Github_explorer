import { RepositoreItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function Repositorylist() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

    <ul>
      <RepositoreItem repository={repository} />
      <RepositoreItem repository={repository} />
      <RepositoreItem repository={repository} />
      <RepositoreItem repository={repository} />
    </ul>
    </section>
  );
}
