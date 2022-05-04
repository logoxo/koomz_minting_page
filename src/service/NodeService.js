export default class NodeService {

    getTreeTableNodes() {
        return fetch('@/data/tree.json').then(res => res.json())
                .then(d => d.root);
    }

    getTreeNodes() {
        return fetch('@/data/tree.json').then(res => res.json())
                .then(d => d.root);
    }
}
