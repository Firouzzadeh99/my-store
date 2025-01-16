import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface IProps {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  isPending?: boolean;
  handleDelete: () => void;
}

export default function DeleteDialog({
  isDialogOpen,
  setIsDialogOpen,
  name,
  isPending,
  handleDelete,
}: IProps) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="w-[340px]">
        <DialogHeader>
          <DialogTitle>آیا از حذف {name} مورد نظر اطمینان دارید؟</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex items-center gap-2.5">
          <DialogClose asChild>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsDialogOpen(false)}
            >
              انصراف
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            type="button"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending && <Loader2 className="animate-spin" size={20} />}
            بله، مطمئنم
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
