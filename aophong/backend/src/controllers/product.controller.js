import Product from '../models/product.model.js';
import Category from '../models/category.model.js';

//[GET] /product/category/:id
export function getProductByCateId(req,res){
    const cateId = req.params.id;
    // console.log(cateId);
    if(!cateId)
        return res.status(400).json({message: "thiếu id Danh mục"});

    Product.find({categoryId: cateId}).populate("categoryId")
        .then(resData => res.status(200).json(resData))
        .catch(err => res.status(500).json(err))
}


export function index(req, res) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page-1 ) *limit;
    if(req.query.name) {

    }

const filter={};
    const nameString = req.query.name;
    if(nameString)  
        filter.name = nameString
        Product.find(filter).populate('categoryId')
        .then(data =>{
            res.status(200).json(data);
            })
        .catch(()=>{
            res.status(500).json({message:"Có lỗi khi lấy dữ liệu"});
        })
}
//[GET] /product/:id
export function getById(req, res) {
    let id = req.params.id;
    if(id){
        Product.findById(id).populate('categoryId')
            .then(data=>{
                res.status(200).json(data);
            })
            .catch(()=>{
                res.status(400).json({message: "Không tìm thấy sản phẩm"})
            })
    }else{
        res.status(400).json({message:"Không nhận được id"})
    }
}
//[POST] /product
export function insert(req, res) {
    const product = req.body;
    if(product != {}){
        Product.create(product)
            .then(data=>{
                res.status(201).json(data)
            })
            .catch(()=>{
                res.status(500).json({message: "Có lỗi khi thêm sản phẩm"})
            })
    }else{
        res.status(400).json({message: "Không nhận dược dữ liệu"})
    }
}
//[PUT] /product/:id
export function update(req, res) {
    const id = req.params.id;
    // console.log(id);
    if(id){
        const productData = req.body;
        // console.log(productData);
        if(productData != {}){
            Product.findByIdAndUpdate(id,productData,{new:true})
                .then((data)=>{
                    res.json(data)
                })
                .catch(()=>{
                    res.json({message: "có lỗi khi sửa"});
                })
        }else{
            res.json({message: "Không nhận được dữ liệu"});
        }
    }else{
        res.json({message: "Không nhận được id"})
    }
}
//[DELETE] /product/:id
export function remove(req,res){
    const id = req.params.id;
    // console.log(id);
    if(id){
        Product.findByIdAndDelete(id)
            .then((data)=>{
                res.json(data);
            })
            .catch(()=>{
                res.json({message: "có lỗi khi xóa"});
            })
    }else{
        res.json({message: "Không nhận được id"})
    }
    
}