import { useContext } from 'react';
import { AuthStorageContext } from '../utils/AuthStorageContext';

const useAuthStorage = () => useContext(AuthStorageContext);

export default useAuthStorage;
