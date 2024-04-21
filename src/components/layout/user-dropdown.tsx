'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ModeToggle } from '../ui/mode-toggle'

type UserDropdownProps = {
    className?: string
}

export function UserDropdown({ className }: UserDropdownProps) {
    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={cn(className, 'bg-card border shadow')}>Hi User</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex items-center justify-between">
                    <Link href={`/profile/username`} className="w-full">User's Name</Link>
                    <ModeToggle />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />


            {/* <DropdownMenuSeparator /> */}

            <DropdownMenuGroup>
                {/* <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Characters</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem><Link href="/characters" className="w-full">Mine</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/characters/new" className="w-full">New</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/characters/shared" className="w-full">Shared</Link></DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub> */}

                <DropdownMenuItem><Link href="/" className="w-full">Dashboard</Link></DropdownMenuItem>

            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="cursor-pointer" onClick={async () => { }}>
                Log out
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu >
    )
}


export default UserDropdown
