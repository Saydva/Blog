import { CreateTestDto } from './dto/test-create.dto';

export const mockPosts: CreateTestDto[] = [
  {
    id: 1,
    title: 'Prvý príspevok',
    content:
      'Toto je obsah prvého príspevku. Slúži na testovanie funkcionality.',
  },
  {
    id: 2,
    title: 'Druhý príspevok',
    content:
      'Obsah druhého príspevku s niekoľkými vetami pre lepšie testovanie.',
  },
  {
    id: 3,
    title: 'Tretí príspevok',
    content: 'Tretí príspevok obsahuje informácie o technológiách a vývoji.',
  },
  {
    id: 4,
    title: 'Štvrtý príspevok',
    content: 'Štvrtý príspevok je o programovaní a najlepších praktikách.',
  },
  {
    id: 5,
    title: 'Piaty príspevok',
    content: 'Piaty príspevok sa venuje témam ako dizajn a UX.',
  },
  {
    id: 6,
    title: 'Šiesty príspevok',
    content: 'Šiesty príspevok uzatvára sériu s obsahom o databázach.',
  },
];
