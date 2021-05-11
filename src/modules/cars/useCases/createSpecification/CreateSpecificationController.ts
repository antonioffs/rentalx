import { Response, Request } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController{

    constructor(private creteSpecificationUseCase: CreateSpecificationUseCase){

    }

    handle(request: Request, response: Response): Response{
        const {name, description} = request.body;

        this.creteSpecificationUseCase.execute({name, description});
    
        return response.status(201).send();
    }


}

export { CreateSpecificationController }