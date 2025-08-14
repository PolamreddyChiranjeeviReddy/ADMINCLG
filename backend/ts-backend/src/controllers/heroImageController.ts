import { Request, Response } from "express";
import { MulterRequest } from "../types/multer";
import HeroImage from "../models/heroImageModel";
import path from 'path';
import fs from 'fs';

// Add new hero image
export const createHeroImage = async (req: MulterRequest, res: Response) => {
  try {
    const {title}=req.body;
    // const desktopImage = req.files?.desktopImage?.[0]?.filename;
    // const mobileImage = req.files?.mobileImage?.[0]?.filename;
    const desktopImage = req.files && 'desktopImage' in req.files ? req.files['desktopImage'][0].filename : undefined;
    const mobileImage = req.files && 'mobileImage' in req.files ? req.files['mobileImage'][0].filename : undefined;
        if (!desktopImage || !mobileImage) {
      return res.status(400).json({ message: "Both images are required." });
    }

    const newImage = new HeroImage({ title, desktopImage, mobileImage });
    await newImage.save();

    res.status(201).json(newImage);
      } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Something went wrong' });
  }
};

// Get all hero images
export const getHeroImages = async (_req: Request, res: Response) => {
  try {
    const images = await HeroImage.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch hero images" });
  }
};

export const updateHeroImage = async (req:MulterRequest, res:Response) => {
  try {
    const { _id } = req.params;
    const {title}=req.body;
    // const desktopImage = req.files?.desktopImage?.[0]?.filename;
    // const mobileImage = req.files?.mobileImage?.[0]?.filename;
    const desktopImage = req.files && 'desktopImage' in req.files ? req.files['desktopImage'][0].filename : undefined;
    const mobileImage = req.files && 'mobileImage' in req.files ? req.files['mobileImage'][0].filename : undefined;
    const heroImage = await HeroImage.findOne({ _id });
    if (!heroImage) {
      return res.status(404).json({ error: 'Hero Image not found' });
    }

    heroImage.title = title || heroImage.title;

    // Replace images if uploaded
    if (req.files?.desktopImage) {
      const heroPath = path.join(__dirname, '..', 'uploads', heroImage.desktopImage);
      if (heroImage.desktopImage && fs.existsSync(heroPath)) {
      fs.unlinkSync(heroPath);
      }

      heroImage.desktopImage = desktopImage;
    }

    if (req.files?.mobileImage) {
        const hodPath = path.join(__dirname, '..', 'uploads', heroImage.mobileImage);
        if (heroImage.mobileImage && fs.existsSync(hodPath)) {
        fs.unlinkSync(hodPath);
      }
      heroImage.mobileImage = mobileImage;
    }

    const updated = await heroImage.save();
    res.status(200).json(updated);

  } catch (err:unknown) {
  // console.error('Update error:', err);  // already done ✅
        const error = err as Error;
  res.status(500).json({ error: error.message || 'Something went wrong while updating' }); // <-- update this
}

};


// Delete hero image
export const deleteHeroImage = async (req: Request, res: Response) => {
 
  try {
    const { _id } = req.params;
    const heroImage = await HeroImage.findOne({_id});
    console.log("sorry");

    if (!heroImage) return res.status(404).json({ message: 'hero image not found' });

    // Delete image from disk
    const imagePathM = path.join(__dirname, '..', 'uploads', heroImage.mobileImage);
    if (fs.existsSync(imagePathM)) fs.unlinkSync(imagePathM);

    const imagePathD = path.join(__dirname, '..', 'uploads', heroImage.desktopImage);
    if (fs.existsSync(imagePathD)) fs.unlinkSync(imagePathD);


    await heroImage.deleteOne();
    res.status(200).json({ message: 'hero image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }

};
