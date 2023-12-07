import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
//  import { CreaterAdminGuard } from '../guards/admin.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './model/role.model';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService:RoleService){}

    @Post('create')
    async createRole(@Body() createRoleDto:CreateRoleDto):Promise<Role>{
        return this.roleService.createRole(createRoleDto)    
    }

    @Get('all')
    async findAllCompany():Promise<Role[]>{
        return this.roleService.findAllRoles()
    }

    @Get('one/:id')
    async findById(@Param("id") id:string):Promise<Role>{
        return this.roleService.findById(+id)
    }

    @Delete("/:id")
    async deleteById(@Param('id') id:string):Promise<String>{
        return this.roleService.deleteById(+id)
    }
    
    // @UseGuards(CreaterAdminGuard)
    @Put("update/:id")
    async updateById(@Param('id') id:string, @Body() updateRoleDto:UpdateRoleDto){
        return this.roleService.updateById(+id,updateRoleDto)
    }
}
