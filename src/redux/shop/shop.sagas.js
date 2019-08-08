import { takeEvery, call, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.util';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas() {
  yield call(fetchCollectionsStart);
}
