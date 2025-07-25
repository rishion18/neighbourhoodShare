import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addItem,
  markAsSold,
  borrowItem,
  toggleAvailability,
  type Item,
} from './../redux/slices/item.slice';

export const useItems = () => {
  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  return {
    items,
    addItem: (item: Item) => dispatch(addItem(item)),
    markAsSold: (id:string) => dispatch(markAsSold(id)),
    borrowItem: (id:string, borrower:string) => dispatch(borrowItem({ id, borrower })),
    toggleAvailability: (id:string) => dispatch(toggleAvailability(id)),
  };
};
