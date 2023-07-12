// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createUser, getAllUsers } from "@/backend/handler/users.handler";

export default function handler(req, res) {
  switch (req.method) {
    case 'GET': // traiga todos los usuarios
     
      getAllUsers(req, res)
     
      break;
    case 'POST':
      createUser(req, res)
      break;
    
    case 'PUT':
      res.status(200).json({
        message: 'Elemento actualizado'    
      })

      break;

    case 'PATCH':
      res.status(200).json({
        message: 'Parte del elemento actualizado'
      })
      break;
    
    case 'DELETE':
      res.status(200).json({
        message: 'Elemento eliminado'
      })
      break;
    
    case 'HEAD':
      res.status(200).json({
        message: 'Nanai'
      })
      break;
    
    default:
      res.status(405).json({
        message: 'Method not support'
      })
      break;
  }
}
