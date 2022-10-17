import * as helper from './controllers.Helper.js'
import * as repository from '../repositories/ranking.Repository.js'


async function getRanking(req, res) {

    try {
        const response = await repository.selectRanking();
        if (response.rowCount) {
            return helper.okResponse(res, response.rows.map(elem => ({ 
                id: elem.id,
                name:elem.name,
                linksCount:elem.conta_urls,
                visitCount:elem.soma_visita

            })))
        }
        return helper.badResquestResponse(res, { message: 'Erro servidor' });

    } catch (error) {

    }


}

export { getRanking }