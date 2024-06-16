import { collection, doc, getDoc, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

export async function fetchFieldFromDocument(idDocumento: string, campoName: string): Promise<any> {
    try {
        const docRef = doc(firestore, 'info_telas', idDocumento);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            if (data && campoName in data) {
                return data[campoName];
            } else {
                throw new Error('Não foi possível encontrar o campo ' + campoName + ' no documento');
            }
        } else {
            throw new Error('ID ' + idDocumento + ' não encontrado na coleção');
        }
    } catch (error: any) {
        console.error("Erro na busca do documento:", error);
        throw new Error("Erro ao buscar o documento: " + error.message);
    }
}

export async function fetchCollectionForm(documentId: string): Promise<any[]> {
    try {
        const docRef = doc(firestore, 'formularios', documentId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            const fieldsArray = Object.keys(data).map(key => data[key]);
            return fieldsArray;
        } else {
            throw new Error(`Documento com ID ${documentId} não encontrado na coleção.`);
        }
    } catch (error: any) {
        console.error("Erro na busca do documento:", error);
        throw new Error("Erro ao buscar o documento: " + error.message);
    }
}
